import React, { useState, useEffect } from 'react';
import { useRouter } from'next/navigation';
// Simple slugify function (you might want a more robust library for production)
const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all n-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
};

// Reusable Input component (optional, but good practice)
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
      required // Basic HTML5 validation
      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    />
  </div>
);

// Reusable Button component
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


const AddNewProjectModal = ({ isOpen, onClose }) => {
  const [projectName, setProjectName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // Reset form when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setProjectName('');
      setIsSubmitting(false);
    }
  }, [isOpen]);

  // Handle Esc key press to close modal
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
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!projectName.trim() || isSubmitting) {
      // Basic validation or prevent double submit
      return;
    }

    setIsSubmitting(true);
    const projectSlug = slugify(projectName);

    try {
      // Optional: Add any API call logic here if needed before redirecting
      // e.g., await createProjectAPI({ name: projectName, slug: projectSlug });

      console.log(`Redirecting to /${projectSlug}`);
      await router.push(`/${projectSlug}`);
      // No need to call onClose() here as the page navigation will unmount the modal
      // No need to setIsSubmitting(false) for the same reason
    } catch (error) {
      console.error("Failed to redirect:", error);
      // Handle error appropriately (e.g., show error message)
      setIsSubmitting(false); // Reset submission state on error
    }
  };

  // Prevent rendering if not open
  if (!isOpen) {
    return null;
  }

  // Handle clicks on the overlay to close
  const handleOverlayClick = (event) => {
      // Only close if the direct overlay element is clicked, not the modal content
      if (event.target === event.currentTarget) {
          onClose();
      }
  }

  return (
    // Overlay
    <div
        className="fixed inset-0 z-40 bg-black bg-opacity-50 flex items-center justify-center p-4 transition-opacity duration-200 ease-out"
        onClick={handleOverlayClick} // Close on overlay click
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
    >
      {/* Modal Panel */}
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden transform transition-all duration-200 ease-out scale-100">
         {/* Using form for semantic structure and potential native validation */}
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
                    autoFocus={true} // Auto-focus on the input when modal opens
                />

                 {/* Optional: Add more fields here if needed */}

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