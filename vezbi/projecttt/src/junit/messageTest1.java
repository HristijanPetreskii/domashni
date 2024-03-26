package junit;
import org.junit.Test;

//import static org.testng.AssertJUnit.assertEquals;
import java.time.Duration;

import static org.junit.jupiter.api.Assertions.*;

public class messageTest1 {
 String message = "tom";
 Message messageobject = new Message(message);

 @Test
 public void testPrintTrue() {
  assertEquals(message, messageobject.printMessage());
 }

 @Test
 public void testPrintMessageFalse() {
  assertEquals("Mark", messageobject.printMessage());
 }

 @Test
 public void testPrintMessagewithduration() {
  assertTimeout(Duration.ofMillis(5000), () -> {

   messageobject.printMessage();
//   Thread.sleep(1000);
  });
 }
}
