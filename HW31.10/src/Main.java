public class Main {
    public static void main(String[] args)
    {
        int[] array1 = new int[]{1, 2, 3, 4, 5, 6};
        int num1 = 2;

        for (int i = 0; i < array1.length; i++) {
            if (array1[i] == num1) {
                System.out.println(i);

            } else {
                System.out.println(-1);
            }
        }
        System.out.println("------------------------------------------------");
        int []array2=new int[]{1,2,3,4,6,2,3,};

        for (int i = 0; i < array2.length; i++) {
            for (int j = i; j < array2.length; j++) {
                if (array2[i] % 2 == 0 && array2[i] != array2[j]) {
                    System.out.println(array2[i]);
                } else {
                    System.out.println(-1);
                }
            }

        }
        System.out.println("--------------------------------------------");

        for (int i = 0; i < array2.length; i++) {
            for (int j = i; j < array2.length; j++) {
                if(   array2[i]!=array2[j])
                {
                    System.out.print(array2[i] + " ");
                } else {
                    System.out.println(-1);
                }
            }
        }


    }
}