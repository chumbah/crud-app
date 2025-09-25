const db = require('../db');

class Student {
  static getAll(callback) {
    db.all('SELECT * FROM students', [], callback);
  }

  static getById(id, callback) {
    db.get('SELECT * FROM students WHERE id = ?', [id], callback);
  }

  static create(student, callback) {
    const { name, age } = student;
    db.run('INSERT INTO students (name, age) VALUES (?, ?)', [name, age], function (err) {
      callback(err, { id: this.lastID, ...student });
    });
  }

  static update(id, student, callback) {
    const { name, age } = student;
    db.run('UPDATE students SET name = ?, age = ? WHERE id = ?', [name, age, id], function (err) {
      callback(err, { id, ...student });
    });
  }

  static delete(id, callback) {
    db.run('DELETE FROM students WHERE id = ?', [id], callback);
  }
}

module.exports = Student;
