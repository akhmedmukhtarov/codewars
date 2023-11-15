package main

func Collatz(n int) int {
	counter := 0
	for n != 1{
		if n%2 == 0 {
			n /= 2
			counter++
		}else {
			n = n * 3 + 1
			counter ++
		}
	}
	return counter+1
}
func main() {
	println(Collatz(20))
}
