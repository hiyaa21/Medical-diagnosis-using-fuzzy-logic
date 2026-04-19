# 🩺 Medical Diagnosis using Fuzzy Logic

## 📌 Overview

This project is a web-based medical diagnosis system that uses **Fuzzy Logic** to predict possible diseases based on user-selected symptoms and their intensity levels.

Unlike traditional binary systems, this model handles uncertainty by allowing symptoms to exist in varying degrees such as **Very Low, Low, Medium, High, and Very High**.

---

## 🚀 Features

* 🧠 Fuzzy logic-based disease prediction
* 📊 Symptom intensity selection (VL, L, M, H, VH)
* 🌐 User-friendly web interface
* 🗄️ MySQL database integration
* ⚡ Real-time evaluation of symptoms
* 🔐 User login & session handling

---

## 🏗️ Tech Stack

* **Frontend:** HTML, CSS, Bootstrap, JavaScript
* **Backend:** PHP
* **Database:** MySQL (XAMPP)
* **Logic:** Fuzzy Logic System

---

## ⚙️ How It Works

1. User selects symptoms and their intensity levels
2. Inputs are converted into fuzzy values (**Fuzzification**)
3. System applies predefined fuzzy rules
4. Inference engine evaluates possible diseases
5. Output is converted into a crisp result (**Defuzzification**)
6. Final disease prediction is displayed

---

## 🧮 Fuzzy Logic Flow

```
Patient Symptoms
        ↓
Fuzzification
        ↓
Fuzzy Rule Evaluation
        ↓
Inference Engine
        ↓
Defuzzification
        ↓
Disease Prediction
```

---

## 🗂️ Project Structure

```
Medical-diagnosis-using-fuzzy-logic/
│
├── html/          # Frontend pages
├── php/           # Backend logic
├── js/            # JavaScript files
├── css/           # Styling
├── img/           # Images
├── bootstrap/     # UI framework
├── *.sql          # Database files
└── README.md
```

---

## 🛠️ Setup Instructions

1. Install XAMPP
2. Place project folder inside:

   ```
   C:\xampp\htdocs\
   ```
3. Start **Apache** and **MySQL**
4. Open phpMyAdmin → Create database `medical`
5. Import all `.sql` files
6. Run project:

   ```
   http://localhost/medical/html/
   ```

---

## 📸 Screenshots

(Add screenshots here for better presentation)

---

## 🎯 Use Cases

* Basic medical assistance system
* Educational project for fuzzy logic
* Decision support systems

---

## ⚠️ Disclaimer

This project is for **educational purposes only** and should not be used for real medical diagnosis.

---

## 👨‍💻 Author

* Your Name

---

## ⭐ Acknowledgment

Built as part of a **Soft Computing / AI project** to demonstrate real-world application of fuzzy logic.

---
