namespace Heckathon.Server.Models
{
    public class User
    {
        public int UserID { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public string PhoneNumber { get; set; }
        public string Role { get; set; }
        public DateTime DateCreated { get; set; }
    }

    public class Car
    {
        public int CarID { get; set; }
        public int UserID { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int? Year { get; set; }
        public string RegistrationNumber { get; set; }
        public string VIN { get; set; }
        public DateTime DateRegistered { get; set; }
    }

    public class ServiceType
    {
        public int ServiceTypeID { get; set; }
        public string ServiceName { get; set; }
    }

    public class Business
    {
        public int BusinessID { get; set; }
        public string BusinessName { get; set; }
        public string AddressLine { get; set; }
        public string Lattitude { get; set; }
        public string Longitude { get; set; }
        public bool IsVerified { get; set; }
    }

    public class Mechanic
    {
        public int MechanicID { get; set; }
    }

    public class Customer
    {
        public int CustomerID { get; set; }
    }

    public class Supplier
    {
        public int SupplierID { get; set; }
    }

    public class BusinessService
    {
        public int BusinessServiceID { get; set; }
        public int BusinessID { get; set; }
        public int ServiceTypeID { get; set; }
    }

    public class Appointment
    {
        public int AppointmentID { get; set; }
        public int CarID { get; set; }
        public int MechanicID { get; set; }
        public DateTime AppointmentDate { get; set; }
        public string Status { get; set; }
        public DateTime CreatedDate { get; set; }
    }

    public class CarServiceRequest
    {
        public int RequestID { get; set; }
        public int AppointmentID { get; set; }
        public int ServiceTypeID { get; set; }
        public string Description { get; set; }
        public decimal? EstimatedCost { get; set; }
    }

    public class CarState
    {
        public int CarStateID { get; set; }
        public int AppointmentID { get; set; }
        public string Status { get; set; }
        public DateTime UpdatedDate { get; set; }
    }

    public class Invoice
    {
        public int InvoiceID { get; set; }
        public int AppointmentID { get; set; }
        public decimal TotalAmount { get; set; }
        public DateTime InvoiceDate { get; set; }
        public bool Paid { get; set; }
    }

    public class Review
    {
        public int ReviewID { get; set; }
        public int AppointmentID { get; set; }
        public int Rating { get; set; }
        public string Comments { get; set; }
        public DateTime ReviewDate { get; set; }
    }
}
