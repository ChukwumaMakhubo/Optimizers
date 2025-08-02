using Dapper;


namespace Heckathon.Server.DataAccess
{
    public interface ISqlDataAccess
    {
        Task<IEnumerable<T>> GetData<T, P>(string spName, P parameters, string connectionId = "DefaultConnection");
        Task SaveData<T>(string spName, T parameters, string connectionId = "DefaultConnection");

        Task<T> ExecuteScalarAsync<T>(string sql, DynamicParameters parameters, string connectionId = "DefaultConnection"); // Gents here I Return a single scalar value from a stored procedure

    }
}
