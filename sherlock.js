//Input Example

_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

package tarea2_id150154;
import java.io.*;

public class Tarea2_ID150154 {

    public static void main(String[] args) throws IOException {
        StringBuffer outputbuffer = new StringBuffer();
        BufferedReader inputbuffer = new BufferedReader(new InputStreamReader(System.in));
        
        System.out.println("Input");
        for(byte T = Byte.parseByte(inputbuffer.readLine()); T >= 1 && T <= 100; --T){
            String[] input = inputbuffer.readLine().split(" ");
            int A = Integer.parseInt(input[0]);
            int B = Integer.parseInt(input[1]);
            
            int Output = (int)(Math.floor(Math.sqrt(B)) - Math.ceil(Math.sqrt(A)) + 1);
            outputbuffer.append(Output).append("\n");   
        }
        System.out.println("Output");
        System.out.print(outputbuffer);
       }
    
}
