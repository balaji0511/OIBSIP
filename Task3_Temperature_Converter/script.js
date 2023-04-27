const calculate_Temp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_dif');
    const valueTemp = temp_dif.options[tempSelected.selectedIndex].value;

    // Conversion from Celsius to Fahrenheit
    const C_T = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Conversion from Fahrenheit to Celsius
    const F_H = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'cel') {
        document.getElementById("res").innerHTML = C_T(inputTemp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("res").innerHTML = F_H(inputTemp) + "&#176; Celsius";
    }
}
