package be.petey952.blankjavapowertools;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import software.amazon.lambda.powertools.logging.Logging;

public class Handler implements RequestHandler<String, String> {
    private static final Logger LOG = LoggerFactory.getLogger(Handler.class);

    public Handler() {
        // Initialize stuff here
        LOG.info("{} constructor called", this.getClass().getCanonicalName());
    }

    @Override
    @Logging
    public String handleRequest(String s, Context context) {
        LOG.info("Function {}:{} handler was called", context.getFunctionName(), context.getFunctionVersion());
        LOG.info("Payload string was {}", s);

        return "200 OK";
    }
}
