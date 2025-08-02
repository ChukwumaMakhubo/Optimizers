using Heckathon.Server.DataAccess;

namespace Heckathon.Server.Repository
{
    public class SynergyRepository
    {
        private readonly ISqlDataAccess sqlData;
        public SynergyRepository(ISqlDataAccess sqlData)
        {
            this.sqlData = sqlData;
        }

    }
}
