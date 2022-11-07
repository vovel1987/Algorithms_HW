public class Main {
    public static void main(String[] args)
    {
       // First level: вычислить сложность в лучшем и худшем случае

      //Лучший случай если a=b   O(1) константный
        // eckb a!=b  происходит еще одно действие O(n)
     //   доп 1
        void method(int a, int b) {
        while (a != b) {
            if (a > b) {
                a = a - b;
            } else {
                b = b - a;
            }
        }
    }
      // Метод содержит 3 цикла for
        // первый цикл  О(N/2) =O(N)
        // второй цикл O(j+N/2) =O(N/2)=O(N)
        // O(N)*O(N)=O(N^2)
        //третий цикл увеличивает шаг в 2раза O(log2N)=O(logN)
        // O(N^2 * logN)

     //   доп 2
        void method(int n) {
        for (int i = 0; i < n / 2; i++) {
            for (int j = 1; j + n / 2 <= n; j++) {
                for (int k = 1; k <= n; k = k * 2) {
                    System.out.println("I am expert!");
                }
            }
        }
    }


    //    доп 3
        void method3(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j = j + i) {
                System.out.println("I am expert!");
            }
        }
    }

    }
}