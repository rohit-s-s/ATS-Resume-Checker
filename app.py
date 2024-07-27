from flask import Flask, request, render_template,redirect,url_for
from calculateScore import calculateScore

app = Flask(__name__)

@app.route("/", methods=["GET","POST"])
def home():
    if request.method == "POST":
        resume = request.files["resume"]
        job_desc = request.files["job-description"]
        result = calculateScore(resume,job_desc)
        score,present,missing,extra = result
        print(score)
        return redirect(url_for("output",score=score, present=present, missing=missing, extra=extra))
    else:
        return render_template("home.html")

@app.route("/output")
def output():
    sc = request.args.get("score",None)
    present = request.args.get("present",None)
    missing = request.args.get("missing",None)
    extra = request.args.get("extra",None)
    pre = present.split(",")
    abs = missing.split(",")
    add = extra.split(",")
    return render_template("output.html",score=sc, present = pre, missing=abs, extra=add)
    

if __name__ == "__main__":
    app.run(debug=True)