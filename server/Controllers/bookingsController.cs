using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Data;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BookTableController : ControllerBase
    {
        private readonly Db dbContext;

        public BookTableController(Db dbContext) {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetBookings()
        {
            try {
                List<BookTable> tableBookings = await dbContext.Bookings.ToListAsync();
                return Ok(tableBookings);
            } catch (Exception e) {
                return StatusCode(500, "Internal server error: " + e.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Booking(BookTable bookTable) {
            try {
                var booking = new BookTable
                {
                    Date = bookTable.Date,
                    Time = bookTable.Time,
                    NumberOfGuests = bookTable.NumberOfGuests,
                    ContactName = bookTable.ContactName,
                    ContactEmail = bookTable.ContactEmail,
                    ContactPhone = bookTable.ContactPhone,
                };

                await dbContext.AddAsync(booking);
                await dbContext.SaveChangesAsync();

                return Ok("success");
            } catch (Exception e) {
                return StatusCode(500, "Internal server error: " + e.Message);
            }
        }
    }

    [Route("/available_dates")]
    public class AvailableDatesController : ControllerBase {
        private readonly Db dbContext;

        public AvailableDatesController(Db dbContext) {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAvailability() {
            try {
                var today = DateTime.UtcNow.Date;
                var endDate = today.AddDays(7);

                var bookingsCount = await dbContext.Bookings
                    .Where(b => b.Date >= today && b.Date <= endDate)
                    .GroupBy(b => b.Date.Date)
                    .Select(group => new {
                        Date = group.Key,
                        Count = group.Count()
                    })
                    .ToListAsync();
                return Ok(bookingsCount);
            } catch (Exception e) {
                return StatusCode(500, "Internal server error: " + e.Message);
            }
        }
    }
}
