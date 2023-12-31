function Modal({ isOpen, onClose, children }) {

    if (!isOpen) return null;

    return (

        <div className="fixed z-50 inset-0 overflow-y-auto">

            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">

                <div className="fixed inset-0 transition-opacity">

                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>

                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;


                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">

                    {children}
                    
                </div>
            </div>
        </div>

    )
}

export default Modal