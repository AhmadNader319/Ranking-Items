//Models/ItemModel.cs
using System;
namespace RankingApp.Models
{
    public class ItemModel
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public int Ranking { get; set; }

        public int ItemType { get; set; }
    }
}

