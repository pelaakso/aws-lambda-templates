package be.petey952.blankjava;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Handler implements RequestHandler<String, String> {
    private static final Logger LOG = LoggerFactory.getLogger(Handler.class);

    public Handler() {
        // Initialize stuff here
        LOG.info("{} constructor called", this.getClass().getCanonicalName());
    }

    @Override
    public String handleRequest(String s, Context context) {
        LOG.info("Function {}:{} handler was called", context.getFunctionName(), context.getFunctionVersion());

        return "200 OK";
    }
}
