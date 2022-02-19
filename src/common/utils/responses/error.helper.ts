import { HttpException, HttpStatus } from '@nestjs/common';
import { BadRequestType } from 'src/common/types/general';
import {
  DATA_NOT_FOUND_ERROR,
} from '../../constants/responses/error.constants';

export const BadRequest = ({
  message = 'Not Ok',
  body = {},
  status = HttpStatus.BAD_REQUEST,
}: BadRequestType) =>
  new HttpException(
    {
      ...body,
      statusCode: status,
      message: message,
    },
    status,
  );
export const DataNotFoundError = (message: string) =>
  new HttpException(
    {
      statusCode: HttpStatus.BAD_REQUEST,
      message: message,
      error: DATA_NOT_FOUND_ERROR,
    },
    HttpStatus.BAD_REQUEST,
  );
