const db = require('../db');

class Course {
  static getAll(callback) {
    db.all('SELECT * FROM courses', [], callback);
  }

  static getById(id, callback) {
    db.get('SELECT * FROM courses WHERE id = ?', [id], callback);
  }

  static create(course, callback) {
    const { title, description } = course;
    db.run('INSERT INTO courses (title, description) VALUES (?, ?)', [title, description], function (err) {
      callback(err, { id: this.lastID, ...course });
    });
  }

  static update(id, course, callback) {
    const { title, description } = course;
    db.run('UPDATE courses SET title = ?, description = ? WHERE id = ?', [title, description, id], function (err) {
      callback(err, { id, ...course });
    });
  }

  static delete(id, callback) {
    db.run('DELETE FROM courses WHERE id = ?', [id], callback);
  }
}

module.exports = Course;
