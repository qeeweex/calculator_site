from flask import Flask, render_template, request


app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/math")
def math():
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    c = int(request.args.get("c"))
    
    maximum = max(a, b, c)
    minimum = min(a, b, c)
    average = (a + b + c) / 3
    return render_template(
        "math.html", 
        a=a,
        b=b,
        c=c,
        maximum=maximum, 
        minimum=minimum, 
        average=average)

app.run(debug=True, port=8080)

