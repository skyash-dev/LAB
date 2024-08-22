const PI: f64 = 3.14;
fn main() {
    let mut x = 4;
    x = 3; // assigned

    let y = 6;
    let y = 4; // shadowing
    println!("{PI} {x} {y}");

    let z = 5;
    let z = 4;
    println!("{z}");
    {
        println!("{z}");
        let z = 3;
        println!("{z}");
    }
    println!("{z}");
}
