package be.petey952.blankjavapowertools;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;


class HandlerTest {

    @Test
    void handleRequest() {
        var handler = new Handler();

        var output = handler.handleRequest("input", new TestLambdaContext());

        assertThat(output)
                .as("Handler output check failed")
                .isEqualTo("200 OK");
    }
}
