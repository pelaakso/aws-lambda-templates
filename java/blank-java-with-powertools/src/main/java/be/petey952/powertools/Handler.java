package be.petey952.powertools;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Handler implements RequestHandler<String, String> {
    private static final Logger LOG = LoggerFactory.getLogger(Handler.class);

    public Handler() {
        // Initialize stuff here
    }

    @Override
    public String handleRequest(String s, Context context) {
        LOG.info("Handler was called");

        return "200 OK";
    }
}
