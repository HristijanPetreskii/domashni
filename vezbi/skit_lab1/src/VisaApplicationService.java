import java.util.ArrayList;
import java.util.List;




public class VisaApplicationService {
    public static List<String> ApplicationForUkVisaOnly(List<String> ukVisaApplication, List<String> usVisaApplication) {
        if (ukVisaApplication == null || usVisaApplication == null) {
            throw new NullPointerException("Visa applications can't be null.");
        }

        List<String> applicantsForUk = new ArrayList<>();

        for (String applicant : ukVisaApplication) {
            if (!usVisaApplication.contains(applicant)) {

                applicantsForUk.add(applicant);

            }

        }

        return applicantsForUk.isEmpty() ? null : applicantsForUk;
    }
}