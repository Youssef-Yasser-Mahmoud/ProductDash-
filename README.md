# 📚 Product Management Website - README

## 🔍 Overview
A simple Angular website that allows users to **add products** through a form and **display** them in a product list instantly.
Built using Angular standalone components and Reactive Forms.

---

## ✨ Features

### 📝 Add Product
- A **Product Form** where users can input:
  - Product Name
  - Product Description
  - Product Image URL
  - Product Rate (between 1 and 10)
- Form **validations**:
  - All fields are required.
  - Rate must be between 1 and 10.
- **Submit button** disables when the form is invalid.

### 📈 Dynamic Product List
- Displays added products in **card format**.
- Each product card shows:
  - Product Image
  - Product Name
  - Product Description
  - Product Rate with a star symbol (⭐).
- Newly added products appear **immediately** in the list without page reloads.

### 🔄 Component Communication
- Uses **EventEmitter** to send product data from the form to the parent AppComponent.
- **@Input()** is used to send product data from AppComponent to the ProductListComponent.
- Handles changes dynamically using **ngOnChanges** lifecycle hook.

### 🔍 Clean and Modern UI
- Responsive layout using Bootstrap classes (`container`, `row`, `col`, `card`, etc.).
- Smooth UI with box shadows and image aspect ratio handling.

---

## 🎓 Technologies Used
- Angular Standalone Components
- Reactive Forms (`FormGroup`, `FormControl`, `Validators`)
- Event Binding and Property Binding
- Bootstrap for Styling
- TypeScript

---

## 🛠️ How it Works Internally
- **AppComponent** listens for emitted product data.
- On data received, it updates a `productObj` variable.
- The `productObj` is passed into **ProductListComponent**.
- **ProductListComponent** watches for changes and adds the product to a local `productList[]` array.
- Form gets **reset** after successful submission.

---

## ✅ Setup Instructions

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
ng serve
```

4. Open your browser at:

```
http://localhost:4200
```

---

## 🔗 Future Improvements
- Add local storage to persist products after refresh.
- Add edit and delete functionalities for products.
- Improve form UI with real-time validation messages.

---

#Angular #Components #ReactiveForms #EventEmitter #SimpleCRUD
