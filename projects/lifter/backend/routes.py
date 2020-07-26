from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///test.db"
db = SQLAlchemy(app)

############
# DATABASE #
############

class Exercise(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

db.create_all()

##########
# ROUTES #
##########

@app.route('/getAllUsers')
def get_all_users():
    return jsonify([user.serialize() for user in User.query.all()])

@app.route('/getAllExercises')
def get_all_exercises():
    return jsonify([exercise.serialize() for exercise in Exercise.query.all()])

if __name__ == '__main__':
    app.run(debug=True)