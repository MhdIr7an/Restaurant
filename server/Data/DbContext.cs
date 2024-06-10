using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Data
{
    public class Db : DbContext
    {
        public Db(DbContextOptions<Db> options): base(options)
        {

        }

        public DbSet<BookTable> Bookings { get; set; }
    }
}