# Writing your first contract

## To be continued 1

In regards of Gelato VRF, it uses drand network under the hood
to get new randomness every 3 seconds.
Pseudo randomness, is the derivation of multiple distinct
random values, all originating from the same drand randomness.
For example if multiple requests are sent at the same time,
they will all be fulfilled from the same drand value, but with
distinct pseudo randomness, to ensure there is no duplicates
fulfillment.
This is basically done by hashing the base randomness with
other parameters (requestId, request address, ...) to generate
a pseudo randomness.