import { useState } from 'react';
import { Download, FileText, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CVButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cvUrl = '/cv/SamAkinsanya-TVA-Resume-V1.pdf';

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'SamAkinsanya-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        <FileText className="w-4 h-4" />
        View CV
      </button>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            
            <div className="flex items-center justify-center min-h-screen p-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl dark:bg-gray-800 max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    My CV
                  </h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={downloadCV}
                      className="flex items-center gap-1 px-3 py-1.5 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="p-1 text-gray-400 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                
                <div className="flex-1 overflow-hidden">
                  <iframe
                    src={`${cvUrl}#view=fitH`}
                    className="w-full h-full min-h-[70vh] border-0"
                    title="CV Preview"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CVButton;
