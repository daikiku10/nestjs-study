import { OnEvent, OnEventType } from '@nestjs/event-emitter';
import { OnEventOptions } from '@nestjs/event-emitter/dist/interfaces';

export function OnEventAsync(
  event: OnEventType,
  options?: OnEventOptions,
): MethodDecorator {
  return OnEvent(event, {
    async: true,
    ...(options ?? {}),
  });
}
