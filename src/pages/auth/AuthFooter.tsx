const MinimalFooter = () => {
    return (
      <footer className="bg-gray-50 border-t border-gray-200 py-4 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} FlightBook. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default MinimalFooter;
  