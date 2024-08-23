const PI: f64 = 3.14;
fn main() {
    let mut _x = 4;
    _x = 3; // assigned

    let _y = 6;
    let _y = 4; // shadowing
    println!("{PI} {_x} {_y}");

    let _z = 5;
    let _z = 4;
    println!("{_z}");
    {
        println!("{_z}");
        let _z = 3;
        println!("{_z}");
    }
    println!("{_z}");

    sum_two(2, 8)
}

fn sum_two(a: i32, b: i32) {
    let c = a + b;
    println!("{c}");
}
