package Variables;

public class Main {
    public static void main(String[] argv) {
        // Different types os variables
        /*
         * String
         * Int
         * float
         * char
         * boolean
         */

        String firstName = "Wemerson ";
        String lastName = "Nunes";
        // int age = 25;
        // float myFloatNum = 5.99f;
        // char myGene = 'H';
        // boolean myBool = true;

        // String message = String.format("""
        //         Meu nome é %s, tenho %d anos
        //         """, name, age);
        // System.out.println(message);

        String fullName = firstName + lastName;
        System.out.println("Hello, " + fullName);
    }
    
}
