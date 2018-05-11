function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

checkAge(19);