using Heckathon.Server.DataAccess;
using Heckathon.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace Heckathon.Server.Controllers
{
    [ApiController]
    [Route("Synergy")]
    public class SynergyController : Controller
    {
        private readonly ISqlDataAccess _da;
        public SynergyController(ISqlDataAccess _da)
        {
            this._da = _da;
        }
        [HttpPost("UserLogin")]
        public async Task<IActionResult> UserLogin(string email,string password)
        {
            return Ok();
        }
        [HttpPost("RegisterUser")]
        public async Task<IActionResult> RegisterUser(dynamic UserDetails)
        {
            return Ok();
        }

        [HttpGet("GetAppointments")]
        public async Task<IActionResult> GetAppointments()
        {
            return Ok();
        }
        [HttpPost("AddCar")]
        public async Task<IActionResult> AddCar([FromBody]Car car)
        {
            return Ok();
        }
        [HttpPost("UpdateCar")]
        public async Task<IActionResult> UpdateCar([FromBody]Car car)
        {
            return Ok();
        }
        [HttpGet("GetInvoice")]
        public async Task<IActionResult> GetInvoice([FromBody]Invoice invoice)
        {
            return Ok();
        }
        [HttpPost("CreateInvoice")]
        public async Task<IActionResult> CreateInvoice([FromBody]Invoice invoice)
        {
            return Ok();
        }
        [HttpGet("GetReviews")]
        public async Task<IActionResult> GetReviews([FromBody]int id)
        {
            return Ok();
        }
    }
}