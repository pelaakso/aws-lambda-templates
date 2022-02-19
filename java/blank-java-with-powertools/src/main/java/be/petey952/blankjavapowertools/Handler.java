package be.petey952.blankjavapowertools;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import software.amazon.lambda.powertools.logging.Logging;

public class Handler implements RequestHandler<String, String> {
    private static final Logger LOG = LogManager.getLogger();

    public Handler() {
        // Initialize stuff here
    }

    @Override
    @Logging(samplingRate = 1.0)
    public String handleRequest(String s, Context context) {
        LOG.info("Handler was called");

        return "200 OK";
    }
}
