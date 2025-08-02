import '..//CustomerCss/CustomerButton.css'
const CustomerButton = ({text, click }) => {
  return (
      <button className="customer-button" onClick={click }>{text}</button>
  );
};

export default CustomerButton;  