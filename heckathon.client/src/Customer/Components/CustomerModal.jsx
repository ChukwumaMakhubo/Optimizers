import '../CustomerCss/CustomerModal.css';

const CustomerModal = ({title,children }) => {
  
    return (
        <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-content">
            <button className="close-customer-modal">X</button>
                <h1 className="customer-modal-title">{title}</h1>

                {children}
            </div>
        </div>
  )
};

export default CustomerModal;   