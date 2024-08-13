const sql = require('mssql');

// Cấu hình kết nối
const config = {
    user: 'lanoca',
    password: 'lanoca',
    server: 'DANGKHOABACH',
    database: 'LanocaDB',
    options: {
        encrypt: true // Nếu bạn sử dụng kết nối bảo mật
    }
};

// Kết nối với cơ sở dữ liệu
sql.connect(config)
    .then(pool => {
        console.log('Connected to SQL Server');
        return pool.request().query('SELECT * FROM YourTable');
    })
    .then(result => {
        console.dir(result.recordset);
        sql.close();
    })
    .catch(err => {
        console.error('Error:', err);
        sql.close();
    });
