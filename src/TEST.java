public class TEST {

    public void stradd(String str){
        str += "abc";
        System.out.println("输出方法体内str:"+str);
    }
    /*public static void  mian(String[] args){
        String s = new String("hello");
        test1 t= new test1();
        t.stradd(s);
        System.out.println("输出调用方法后str:"+s);
    }*/

    public static void main(String[] args) {
        System.out.println("Hello World!");

        String s = new String("hello");
        TEST t= new TEST();
        t.stradd(s);
        System.out.println("输出调用方法后str:"+s);

        String str1 = "abc"; String str2 = "abc";String str3 = "bcd";

        str3 = str1;

        System.out.println(str3);  //bcd

        String str4 = "bcd";

        System.out.println(str3 == str4);  //true
    }
}
