const User = {
    getById: (id) => {
        return new Promise((resolve, reject) => {
            db.query("SELECT id, name, role FROM users WHERE id = ?", [id], (err, results) => {
                if (err) return reject(err);
                if (results.length === 0) return resolve(null);
                resolve(results[0]);
            });
        });
    }
};

module.exports = User;