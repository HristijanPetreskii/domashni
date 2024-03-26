package junit;

import org.junit.Assert;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MessageTest3 {
    Message message=new Message("test mess");
    @Test
    public void testGoodbyeMessage() {
        Assert.assertEquals(message.goodbyeMessage(),"goodbye");
    }
}