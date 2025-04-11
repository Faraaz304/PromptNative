import React, { useState, useEffect } from 'react';
// Correct import for App Router (if using Next.js 13+ App Router)
import { useRouter } from 'next/navigation';
// Adjust the path based on your project structure
import { addData } from '../hooks/useDatabase';

// --- slugify, InputField, Button components remain the same ---
const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '') // Keep word chars and hyphens
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

const InputField = ({ id, label, value, onChange, placeholder, autoFocus = false }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoFocus={autoFocus}
        required
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    </div>
  );

const Button = ({ children, onClick, type = 'button', variant = 'primary', disabled = false }) => {
    const baseStyle = "inline-flex justify-center items-center px-4 py-2 border text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variants = {
      primary: `border-transparent text-white bg-black hover:bg-gray-800 focus:ring-black ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`,
      secondary: `border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-gray-500 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`,
    };
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${baseStyle} ${variants[variant]}`}
      >
        {children}
      </button>
    );
};
// --- End of reusable components ---


const AddNewProjectModal = ({ isOpen, onClose }) => {
  const [projectName, setProjectName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null); // State to hold potential errors
  const router = useRouter();

  // Reset form and error when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setProjectName('');
      setIsSubmitting(false);
      setError(null); // Clear errors when closing
    } else {
        setError(null); // Clear errors when opening
    }
  }, [isOpen]);

  // Handle Esc key press to close modal (same as before)
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);


  const handleInputChange = (event) => {
    setProjectName(event.target.value);
     if (error) setError(null); // Clear error when user starts typing again
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Clear previous errors on new submission attempt

    if (!projectName.trim() || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    const projectSlug = slugify(projectName);

    // --- Define DB details ---
    const dbName = 'PromptNative'; // Replace with your actual DB name
    const collectionName = 'projects'; // Or your desired collection name
    const projectDocument = {
        name: projectName.trim(), // Send the trimmed name
        slug: projectSlug,
        createdAt: new Date().toISOString(), // Add a timestamp
        // Add any other default fields you want for a new project
    };
    // --- End of DB details ---


    try {
      // 1. Call the addData function from useDatabase.js
      console.log(`Attempting to add project: ${projectName}`);
      const result = await addData(dbName, collectionName, projectDocument);
      console.log('Project added successfully via API:', result);

      // 2. If addData succeeds, redirect
      console.log(`Redirecting to /${projectSlug}`);
      // Use router.push for client-side navigation
      router.push(`/${projectSlug}`);
      // router.push automatically navigates, modal will unmount, no need to manually call onClose or reset state here


    } catch (apiError) {
      // 3. If addData fails (throws an error), handle it
      console.error("Failed to add project via API:", apiError);
      setError(apiError.message || "An unexpected error occurred. Please try again."); // Set error state to display message
      setIsSubmitting(false); // Re-enable the button
    }
  };

  // Prevent rendering if not open (same as before)
  if (!isOpen) {
    return null;
  }

  // Handle clicks on the overlay to close (same as before)
  const handleOverlayClick = (event) => {
      if (event.target === event.currentTarget) {
          onClose();
      }
  }

  return (
    // Overlay
    <div
        className="fixed inset-0 z-40 bg-black bg-opacity-50 flex items-center justify-center p-4 transition-opacity duration-200 ease-out"
        onClick={handleOverlayClick}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
    >
      {/* Modal Panel */}
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden transform transition-all duration-200 ease-out scale-100">
        <form onSubmit={handleSubmit}>
            <div className="p-6">
                <h3 id="modal-title" className="text-lg font-semibold leading-6 text-gray-900 mb-4">
                    Create New Project
                </h3>

                {/* Input Field */}
                <InputField
                    id="projectName"
                    label="Project Name"
                    value={projectName}
                    onChange={handleInputChange}
                    placeholder="my-awesome-app"
                    autoFocus={true}
                />

                {/* Display Error Message */}
                {error && (
                    <p className="mt-2 text-sm text-red-600" role="alert">
                        Error: {error}
                    </p>
                )}

            </div>

             {/* Footer with Actions */}
            <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3">
                 <Button type="button" variant="secondary" onClick={onClose} disabled={isSubmitting}>
                    Cancel
                </Button>
                <Button type="submit" variant="primary" disabled={!projectName.trim() || isSubmitting}>
                    {isSubmitting ? 'Creating...' : 'Create Project'}
                </Button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewProjectModal;