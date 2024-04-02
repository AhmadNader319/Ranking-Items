using Microsoft.AspNetCore.Mvc;
using RankingApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace RankingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RankController : ControllerBase
    {
        private static readonly IEnumerable<ItemModel> Items = new[]
        {
            new ItemModel{Id =1, Title = "Omar Sharif", Ranking=2, ItemType=0 },
            new ItemModel{Id =2, Title = "Adel Imam", Ranking=1, ItemType=2 },
            new ItemModel{Id =3, Title = "Faten Hamama", Ranking=4, ItemType=4 },
            new ItemModel{Id =4, Title = "Ahmed Zaki", Ranking=2, ItemType=3 },
            new ItemModel{Id =5, Title = "Nour El-Sherif", Ranking=3, ItemType=1 },
            new ItemModel{Id =6, Title = "Youssra", Ranking=3, ItemType=2 },
            new ItemModel{Id =7, Title = "Mervat Amin", Ranking=1, ItemType=1 },
            new ItemModel{Id =8, Title = "Laila Elwi", Ranking=4, ItemType=3 },
            new ItemModel{Id =9, Title = "Mohamed Henedi", Ranking=2, ItemType=1 },
            new ItemModel{Id =10, Title = "Ahmed Helmy", Ranking=1, ItemType=0 }
        };

        [HttpGet]
        public IEnumerable<ItemModel> GetAllItems()
        {
            return Items;
        }
    }
}
