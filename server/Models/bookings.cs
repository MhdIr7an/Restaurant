namespace server.Models
{
    public class BookTable
    {
        public int Id { get; set; }
        public required DateTime Date { get; set; }
        public required string Time { get; set; }
        public required int NumberOfGuests { get; set; }
        public required string ContactName { get; set; }
        public required string ContactEmail { get; set; }
        public required string ContactPhone { get; set; }
    }
}
