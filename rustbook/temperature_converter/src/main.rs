use std::{io, string};

fn main() {
    println!("Enter Temperature!");
    let mut temperature_str = String::new();
    loop {
        io::stdin().read_line(&mut temperature_str).expect("msg");
        let mut temperature: i32 = match temperature_str.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("ERR");
                continue;
            }
        };
        break;
    }

    println!("Press 'F' to convert in fahrenheit OR Press 'C' to convert in celsius.");
    let mut to_convert_str = String::new();
    loop {
        io::stdin().read_line(&mut to_convert_str).expect("msg");
        let mut to_convert: char = match to_convert_str.trim().parse() {
            Ok(val) => val,
            Err(_) => {
                println!("ERR");
                continue;
            }
        };
        to_convert_str = to_convert.to_string();
        break;
    }

    let mut converted: f32 = 0.0;

    if (to_convert_str == "F") {
        converted = convert_to_fahrenheit(temperature_str);
    } else if (to_convert_str == "C") {
        converted = convert_to_celsius(temperature_str);
    }

    println!("{}", converted)
}

fn convert_to_celsius(temperature: String) -> f32 {
    let temperature_int: f32 = match temperature.trim().parse() {
        Ok(val) => val,
        Err(_) => 0.0,
    };

    (temperature_int - 32.0) * 0.55
}
fn convert_to_fahrenheit(temperature: String) -> f32 {
    let temperature_int: f32 = match temperature.trim().parse() {
        Ok(val) => val,
        Err(_) => 0.0,
    };

    (temperature_int * 1.8) + 32.0
}
