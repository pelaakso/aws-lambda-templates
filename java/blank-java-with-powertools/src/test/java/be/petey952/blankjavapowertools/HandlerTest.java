package be.petey952.blankjavapowertools;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;


class HandlerTest {

    @Test
    void loggerFieldUsesSlf4jApi() throws Exception {
        var logField = Handler.class.getDeclaredField("LOG");

        assertThat(logField.getType().getName())
                .as("Logger API should be SLF4J")
                .isEqualTo("org.slf4j.Logger");
    }

    @Test
    void handleRequest() {
        var handler = new Handler();

        var output = handler.handleRequest("input", new TestLambdaContext());

        assertThat(output)
                .as("Handler output check failed")
                .isEqualTo("200 OK");
    }
}
