const ChildForm = ({ onSubmit }) => {
  // Event handler to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Collect input values from all input fields
    const inputValues = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        emailAddress: e.target.emailAddress.value,
    };
    // Pass input values to the onSubmit function
    onSubmit(inputValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="first-name" className=" block text-sm mt-5 font-medium leading-6 text-gray-900">
          First Name:
          <input type="text" name="firstName" placeholder="Enter your first name" className=" pe-20 mt-2 block border-2 shadow-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 rounded-md w-full  py-1.5 sm:text-sm sm:leading-6" />
        </label>
      </div>
      <div>
        <label htmlFor="lastName" className="block text-sm mt-5 font-medium leading-6 text-gray-900">
          Last Name:
          <input type="text" name="lastName" placeholder="Enter your last name"  className=" pe-20 mt-2 block border-2 shadow-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 rounded-md w-full py-1.5 sm:text-sm sm:leading-6" />
        </label>
      </div>
      <div>
        <label htmlFor="emailAddress" className="block text-sm mt-5 font-medium leading-6 text-gray-900">
          Email Address:
          <input type="email" name="emailAddress" placeholder="Enter your email"  className=" pe-20 mt-2 block border-2 shadow-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 rounded-md w-full py-1.5 sm:text-sm sm:leading-6 "  />
        </label>
      </div>
      {/* Add more input fields as needed */}
      <br />
      <div className="px-20">
      <button type="submit"  className="px-20 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500  ">Submit</button>
      </div>
    </form>
  );
};

export default ChildForm;
