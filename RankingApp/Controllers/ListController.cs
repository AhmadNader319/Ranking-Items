using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RankingApp.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RankingApp.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class ListController : Controller
    {
        public static List<ListModel> students { get; set; } = new List<ListModel>()
            {
                new ListModel()
                {
                    Id = 1
                },
                new ListModel()
                {
                    Id = 2
                },
                new ListModel()
                {
                    Id = 3
                },
            };

        [HttpGet()]
        public IEnumerable<ListModel> GetAllStudents()
        {
            return students;
        }
        [HttpPost]
        public ActionResult<ListModel> AddStudent([FromBody] ListModel student)
        {
            students.Add(student);
            foreach (var s in students)
            {
                Console.WriteLine($"Student ID: {s.Id}");
            }
            return Ok(student);
        }
    }
}

