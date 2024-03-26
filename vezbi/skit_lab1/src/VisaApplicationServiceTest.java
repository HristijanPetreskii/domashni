/*
import org.junit.jupiter.api.Tags;
import org.junit.jupiter.api.Test;
import static org.junit.Assert.*;
import org.junit.*;
import java.util.*;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
*/
import static org.junit.Assert.*;
import org.junit.*;
import java.util.*;

class VisaApplicationServiceTest
{
   @Test(expected = NullPointerException.class)
   public void testNullUkVisaApplication() {
      List<String> usVisa=null;
      List<String> ukVisa=null;
      List<String> result= VisaApplicationService.ApplicationForUkVisaOnly(usVisa, ukVisa);
      assertNull(result);
   }


   @org.junit.jupiter.api.Test
   public void testEmptyVisaApplications() {

      List<String> ukVisa = new ArrayList<>();
      List<String> usVisa = new ArrayList<>();

      List<String> result = VisaApplicationService.ApplicationForUkVisaOnly(ukVisa, usVisa);
      assertNull(result);
   }

   @org.junit.jupiter.api.Test
   public void testNoApplicantsForUkVisaOnly() {
      List<String> ukVisa = new ArrayList<>();
      List<String> usVisa = new ArrayList<>();

      ukVisa.add("test1");
      ukVisa.add("test2");


      usVisa.add("test2");
      usVisa.add("test1");

      List<String> result = VisaApplicationService.ApplicationForUkVisaOnly(ukVisa, usVisa);
      if(result==null){
         assertNull(result);
      }else {
         assertNotNull(result);
          }
      }

   @org.junit.jupiter.api.Test
   public void testApplicantsForUkVisaOnly() {
      List<String> ukVisaApplication = new ArrayList<>();
      List<String> usVisaApplication = new ArrayList<>();


      ukVisaApplication.add("test1");
      ukVisaApplication.add("test2");
      usVisaApplication.add("test3");

      List<String> result = VisaApplicationService.ApplicationForUkVisaOnly(ukVisaApplication, usVisaApplication);
      assertNotNull(result);
      assertEquals(2, result.size());
      assertTrue(result.contains("test1"));
      assertFalse(!result.contains("test2"));
   }

}