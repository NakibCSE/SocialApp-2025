using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class MembersController (AppDbContext context) : BaseApiController 
    {
        [HttpGet]    //For fetchin all the members listed in the user table
        public async Task<ActionResult<IReadOnlyList<AppUsers>>> GetMembers()
        {
            var members = await context.Users.ToListAsync();
            return members;
        }

        [HttpGet("{id}")]   //It's like: localhost:5001/api/members/nakib-id
        public async Task<ActionResult<AppUsers>> GetMember(string id)
        {
            var member = await context.Users.FindAsync(id);
            if(member == null) return NotFound();
            return member;
        }
    }
}
