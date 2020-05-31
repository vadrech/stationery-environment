from flask import Flask, render_template, request
import random
import ProductEvaluator

app = Flask(__name__, static_url_path="/static")

@app.route("/", methods = ['GET', 'POST'])
def home():
    random_dashboard = random.choice(["action.html", "paper.html", "pencils.html", "wholepicture.html", "companycomparison.html"])
    return render_template("home.html", dashboard = random_dashboard)
 
@app.route("/Companies/OfficeMax", methods = ['GET', 'POST'])
def officemax():
    return render_template("officemax.html")

@app.route("/Companies/OfficeDepot", methods = ['GET', 'POST'])
def officedepot():
    return render_template("officedepot.html")

@app.route("/Companies/Lyreco", methods = ['GET', 'POST'])
def lyreco():
    return render_template("lyreco.html")

@app.route("/Companies/OfficeWorld", methods = ['GET', 'POST'])
def officeworld():
    return render_template("officeworld.html")

@app.route("/Dashboards/Pencils", methods = ['GET', 'POST'])
def pencils():
    return render_template("pencils.html")

@app.route("/Dashboards/Paper", methods = ['GET', 'POST'])
def paper():
    return render_template("paper.html")

@app.route("/Dashboards/WholePicture", methods = ['GET', 'POST'])
def wholepicture():
    return render_template("wholepicture.html")

@app.route("/Dashboards/Action", methods = ['GET', 'POST'])
def action():
    return render_template("action.html")

@app.route("/Dashboards/CompanyComparison", methods = ['GET', 'POST'])
def companycomparison():
    return render_template("companycomparison.html")

@app.route("/ProductEvaluation/Form", methods = ['GET', 'POST'])
def productcomparisonform():
    return render_template("productevaluationform.html")

@app.route("/ProductEvaluation/Results", methods = ['GET', 'POST'])
def productcomparisonresults():
    if request.method == 'POST':
        company = request.form["company"]
        product = request.form["product"]
        units = request.form["units"]
        country = request.form["country"]
        
        company, product, units, country, air_miles, lifespan, certifications, reusability, score, summary = ProductEvaluator.ProductEvaluator(company, product, units, country)
        
    return render_template("productevaluationresults.html", air_miles = air_miles, company = company, lifespan = lifespan, product = product, certifications = certifications, units = units, reusability = reusability, country = country, score = score, summary = summary)


if __name__ == "__main__":
    app.run()
    
    
    